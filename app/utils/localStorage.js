// app/utils/localStorage.js
import predefinedTasks from "../data/predefinedTasks";

export function getTasksFromStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log("Received tasks from storagee:", tasks);
    console.log(Array.isArray(tasks) ? tasks : []);
    return Array.isArray(tasks) ? tasks : [];
}

export function initializeTasksInStorage() {
    console.log("InitializeTasksInStorage has been called");
    if (typeof window !== "undefined" && !localStorage.getItem("tasks")) {
        console.log("Initializing tasks in local storage");
        localStorage.setItem("tasks", JSON.stringify(predefinedTasks));
    }
}
