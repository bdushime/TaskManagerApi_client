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