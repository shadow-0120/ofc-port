import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp
} from "firebase/firestore";
import { db } from "./config";

const PROJECTS_COLLECTION = "projects";

/**
 * Sanitize input - trim whitespace
 * React automatically escapes HTML in JSX, so we don't need HTML entity encoding
 * @param {string} str - String to sanitize
 * @returns {string} Trimmed string
 */
const sanitizeInput = (str) => {
  if (typeof str !== "string") return str;
  return str.trim();
};

/**
 * Validate project data
 * @param {Object} projectData - Project data to validate
 * @returns {Object} Validation result
 */
const validateProject = (projectData) => {
  const errors = [];

  if (!projectData.name || projectData.name.trim().length === 0) {
    errors.push("Project name is required");
  } else if (projectData.name.length > 100) {
    errors.push("Project name must be less than 100 characters");
  }

  if (!projectData.description || projectData.description.trim().length === 0) {
    errors.push("Project description is required");
  } else if (projectData.description.length > 2000) {
    errors.push("Project description must be less than 2000 characters");
  }

  if (!projectData.id || projectData.id.trim().length === 0) {
    errors.push("Project ID is required");
  } else if (!/^[a-z0-9-]+$/.test(projectData.id)) {
    errors.push("Project ID must contain only lowercase letters, numbers, and hyphens");
  }

  if (!projectData.date || projectData.date.trim().length === 0) {
    errors.push("Project date is required");
  }

  if (!projectData.category || projectData.category.trim().length === 0) {
    errors.push("Project category is required");
  }

  if (!projectData.client || projectData.client.trim().length === 0) {
    errors.push("Client name is required");
  }

  if (!projectData.image || projectData.image.trim().length === 0) {
    errors.push("Project image is required");
  } else if (!/^\/images\/.+/.test(projectData.image)) {
    errors.push("Image path must start with /images/");
  }

  if (!Array.isArray(projectData.images) || projectData.images.length === 0) {
    errors.push("At least one image is required");
  } else {
    projectData.images.forEach((img, index) => {
      if (!/^\/images\/.+/.test(img)) {
        errors.push(`Image ${index + 1} path must start with /images/`);
      }
    });
  }

  if (projectData.website && !/^https?:\/\/.+/.test(projectData.website)) {
    errors.push("Website URL must be a valid HTTP/HTTPS URL");
  }

  if (projectData.technologies && !Array.isArray(projectData.technologies)) {
    errors.push("Technologies must be an array");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Get all projects
 * @returns {Promise<Array>} Array of projects
 */
export const getAllProjects = async () => {
  try {
    const projectsRef = collection(db, PROJECTS_COLLECTION);
    const q = query(projectsRef, orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    
    const projects = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      projects.push({
        docId: doc.id, // Firestore document ID
        id: data.id || doc.id, // Custom project ID or fallback to doc ID
        ...data
      });
    });
    
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to fetch projects: " + error.message);
  }
};

/**
 * Get a single project by ID
 * @param {string} projectId - Project ID
 * @returns {Promise<Object|null>} Project data or null
 */
export const getProjectById = async (projectId) => {
  try {
    if (!projectId || typeof projectId !== "string") {
      throw new Error("Invalid project ID");
    }

    const projectRef = doc(db, PROJECTS_COLLECTION, projectId);
    const projectSnap = await getDoc(projectRef);
    
    if (projectSnap.exists()) {
      const data = projectSnap.data();
      return {
        docId: projectSnap.id, // Firestore document ID
        id: data.id || projectSnap.id, // Custom project ID or fallback to doc ID
        ...data
      };
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw new Error("Failed to fetch project: " + error.message);
  }
};

/**
 * Add a new project
 * @param {Object} projectData - Project data
 * @returns {Promise<string>} New project document ID
 */
export const addProject = async (projectData) => {
  try {
    // Validate input
    const validation = validateProject(projectData);
    if (!validation.isValid) {
      throw new Error(validation.errors.join(", "));
    }

    // Sanitize inputs (trim whitespace)
    const sanitizedData = {
      name: sanitizeInput(projectData.name),
      description: sanitizeInput(projectData.description),
      id: sanitizeInput(projectData.id).toLowerCase(),
      date: sanitizeInput(projectData.date),
      category: sanitizeInput(projectData.category),
      client: sanitizeInput(projectData.client),
      image: sanitizeInput(projectData.image),
      images: projectData.images.map(img => sanitizeInput(img)),
      website: projectData.website ? sanitizeInput(projectData.website) : "",
      technologies: projectData.technologies || [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    // Check if project with this custom ID already exists
    const allProjects = await getAllProjects();
    const existingProject = allProjects.find(p => p.id === sanitizedData.id);
    if (existingProject) {
      throw new Error("A project with this ID already exists");
    }

    const docRef = await addDoc(collection(db, PROJECTS_COLLECTION), sanitizedData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding project:", error);
    throw new Error(error.message || "Failed to add project");
  }
};

/**
 * Update an existing project
 * @param {string} projectId - Project ID
 * @param {Object} projectData - Updated project data
 * @returns {Promise<void>}
 */
export const updateProject = async (projectId, projectData) => {
  try {
    if (!projectId || typeof projectId !== "string") {
      throw new Error("Invalid project ID");
    }

    // Validate input
    const validation = validateProject(projectData);
    if (!validation.isValid) {
      throw new Error(validation.errors.join(", "));
    }

    // Check if project exists
    const existingProject = await getProjectById(projectId);
    if (!existingProject) {
      throw new Error("Project not found");
    }

    // Sanitize inputs (trim whitespace)
    const sanitizedData = {
      name: sanitizeInput(projectData.name),
      description: sanitizeInput(projectData.description),
      date: sanitizeInput(projectData.date),
      category: sanitizeInput(projectData.category),
      client: sanitizeInput(projectData.client),
      image: sanitizeInput(projectData.image),
      images: projectData.images.map(img => sanitizeInput(img)),
      website: projectData.website ? sanitizeInput(projectData.website) : "",
      technologies: projectData.technologies || [],
      updatedAt: serverTimestamp()
    };

    const projectRef = doc(db, PROJECTS_COLLECTION, projectId);
    await updateDoc(projectRef, sanitizedData);
  } catch (error) {
    console.error("Error updating project:", error);
    throw new Error(error.message || "Failed to update project");
  }
};

/**
 * Delete a project
 * @param {string} projectId - Project ID
 * @returns {Promise<void>}
 */
export const deleteProject = async (projectId) => {
  try {
    if (!projectId || typeof projectId !== "string") {
      throw new Error("Invalid project ID");
    }

    // Check if project exists
    const existingProject = await getProjectById(projectId);
    if (!existingProject) {
      throw new Error("Project not found");
    }

    const projectRef = doc(db, PROJECTS_COLLECTION, projectId);
    await deleteDoc(projectRef);
  } catch (error) {
    console.error("Error deleting project:", error);
    throw new Error(error.message || "Failed to delete project");
  }
};

