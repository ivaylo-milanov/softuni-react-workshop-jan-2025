const baseUrl = "http://localhost:3030/jsonstore/users";

export default {
    async getAll() {
        var response = await fetch(baseUrl);
        var result = await response.json();
        var data = Object.values(result);

        return data;
    }
}