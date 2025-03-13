const baseUrl = "http://localhost:3030/jsonstore/users";

export default {
    async getAll() {
        const response = await fetch(baseUrl);
        const result = await response.json();
        const data = Object.values(result);

        return data;
    },
    async create(data) {
        const postData = transformData(data);

        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        });

        const result = await response.json();

        return result;
    },
    async getOne(id) {
        const response = await fetch(`${baseUrl}/${id}`);

        const data = await response.json();

        return data;
    },
    async delete(id) {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        return data;
    },
    async update(id, data) {
        const updateData = transformData(data);
        updateData._id = id;

        const response = await fetch(`${baseUrl}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateData)
        });

        const result = await response.json();

        return result;
    }
}

const transformData = (data) => {
    const { country, city, street, streetNumber, ...postData } = data;

    postData.createdAt = new Date().toISOString();
    postData.updatedAt = new Date().toISOString();
    postData.address = {
        country,
        city,
        street,
        streetNumber
    }

    return postData;
}