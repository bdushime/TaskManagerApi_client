/**
 * Main (Entry Point): Orchestrates the application's initialization lifecycle.
 * Logic Flow: 
 * 1. Instantiates APIClient to fetch remote data.
 * 2. Passes raw data to taskProcessor for object-oriented transformation.
 * 3. Initializes TaskController with processed data.
 * 4. Injects the controller into MenuView and launches the CLI interface.
 */
import { APIClient } from './api.js/APIClient.js';
import { processData } from './taskProcessor.js';
import { TaskController } from './controllers/TaskController.js';
import { MenuView } from './view/MenuView.js';

async function init() {
  
    const api = new APIClient();
    const { users, todos } = await api.fetchData();
 
    const processedUsers = processData(users, todos);

    const controller = new TaskController(processedUsers);
    const view = new MenuView(controller);
    view.display();
}

init();