import request from 'request';
import qs from 'querystring';

export const findUser = function(searchObject) {
    if (Object.values(searchObject).length < 1) {
        return "Please provide at least one credential."
    }

    let queryParams = qs.stringify(searchObject);


    request(`https://jsonplaceholder.typicode.com/users?${queryParams}`, { json: true }, (err, res, body) => {
        if (err) {
            return console.error(err);
        }

        let finalRes = [];

        for (let user of body) {
            const userToReturn = {
                name: user?.name,
                surname: user?.username,
                email: user?.email,
                street: user?.address?.street,
                suite: user?.address?.suite,
                city: user?.address?.city,
                zipcode: user?.address?.zipcode,
                mobile: user?.phone,
                registeredService: user?.website,
                companyName: user?.company?.name
            };

            finalRes.push(JSON.stringify(userToReturn));
        }

        return finalRes;
    });
};


export const createUser = function(userCredentials) {
    if (Object.values(userCredentials).length < 1) {
        return "Please provide at least one credential."
    }

    request.post(`https://jsonplaceholder.typicode.com/users`, userCredentials, (err, res, body) => {
        if (err) {
            return console.error(err);
        }

        return body;
    });
};


export const deleteUser = function(userId) {
    if (!userId) {
        return "Please provide user ID."
    }

    request.delete(`https://jsonplaceholder.typicode.com/users${userId}`, { json: true }, (err, res, body) => {
        if (err) {
            return console.error(err);
        }

        return body;
    });
};

