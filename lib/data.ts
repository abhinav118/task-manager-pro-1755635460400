export const siteData = {
  "tasks": [
    {
      "id": 1,
      "title": "Complete project documentation",
      "description": "Write comprehensive documentation for the new feature",
      "status": "in-progress",
      "priority": "high",
      "category": "Work",
      "dueDate": "2024-01-15",
      "createdAt": "2024-01-10",
      "completedAt": null,
      "projectId": 1
    },
    {
      "id": 2,
      "title": "Review code changes",
      "description": "Review pull request #123",
      "status": "todo",
      "priority": "medium",
      "category": "Work",
      "dueDate": "2024-01-12",
      "createdAt": "2024-01-11",
      "completedAt": null,
      "projectId": 1
    },
    {
      "id": 3,
      "title": "Buy groceries",
      "description": "Weekly grocery shopping",
      "status": "completed",
      "priority": "low",
      "category": "Personal",
      "dueDate": "2024-01-11",
      "createdAt": "2024-01-09",
      "completedAt": "2024-01-11",
      "projectId": null
    },
    {
      "id": 4,
      "title": "Schedule dentist appointment",
      "description": "Annual checkup",
      "status": "todo",
      "priority": "medium",
      "category": "Health",
      "dueDate": "2024-01-20",
      "createdAt": "2024-01-10",
      "completedAt": null,
      "projectId": null
    }
  ],
  "projects": [
    {
      "id": 1,
      "name": "Website Redesign",
      "description": "Complete redesign of company website",
      "status": "active",
      "color": "blue",
      "progress": 65,
      "startDate": "2024-01-01",
      "endDate": "2024-02-15",
      "taskCount": 12,
      "completedTasks": 8
    },
    {
      "id": 2,
      "name": "Mobile App Development",
      "description": "iOS and Android app development",
      "status": "planning",
      "color": "green",
      "progress": 10,
      "startDate": "2024-02-01",
      "endDate": "2024-05-30",
      "taskCount": 25,
      "completedTasks": 2
    },
    {
      "id": 3,
      "name": "Marketing Campaign",
      "description": "Q1 marketing campaign preparation",
      "status": "completed",
      "color": "purple",
      "progress": 100,
      "startDate": "2023-12-01",
      "endDate": "2024-01-10",
      "taskCount": 8,
      "completedTasks": 8
    }
  ],
  "categories": [
    {
      "id": 1,
      "name": "Work",
      "color": "blue",
      "icon": "briefcase"
    },
    {
      "id": 2,
      "name": "Personal",
      "color": "green",
      "icon": "user"
    },
    {
      "id": 3,
      "name": "Shopping",
      "color": "yellow",
      "icon": "shopping-cart"
    },
    {
      "id": 4,
      "name": "Health",
      "color": "red",
      "icon": "heart"
    },
    {
      "id": 5,
      "name": "Other",
      "color": "gray",
      "icon": "folder"
    }
  ],
  "settings": {
    "theme": "light",
    "defaultView": "list",
    "emailNotifications": true,
    "pushNotifications": false,
    "reminderTime": "30 minutes",
    "weekStart": "monday",
    "dateFormat": "MM/DD/YYYY",
    "timeFormat": "12h"
  }
};

export const navigation = {
  "main": [
    {
      "label": "Dashboard",
      "route": "/",
      "icon": "home"
    },
    {
      "label": "Tasks",
      "route": "/tasks",
      "icon": "check-square"
    },
    {
      "label": "Projects",
      "route": "/projects",
      "icon": "folder"
    },
    {
      "label": "Calendar",
      "route": "/calendar",
      "icon": "calendar"
    },
    {
      "label": "Settings",
      "route": "/settings",
      "icon": "settings"
    }
  ],
  "footer": [
    {
      "label": "Help",
      "route": "/help",
      "icon": "help-circle"
    },
    {
      "label": "Feedback",
      "route": "/feedback",
      "icon": "message-square"
    }
  ]
};