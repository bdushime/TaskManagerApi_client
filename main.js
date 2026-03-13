import { APIClient } from "./api.js/APIClient.js";
import { TaskController } from "./controllers/TaskController.js";
import { processData, calculateGlobalStats } from "./taskProcessor.js";


async function run(){
    const api = new APIClient();
    const {users,todos} = await api.fetchData();

    const processedUsers = processData(users,todos);
    const controller = new TaskController(processedUsers);

    controller.showUserDashboard(1);
    controller.handleSearch("delectus");
}

run();