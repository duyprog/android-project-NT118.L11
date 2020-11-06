const apiInsertAStaff = 'http://192.168.183.1:3000/insert_new_staff'

// send post request to insert a staff 

async function insertAStaff(params){
    try{
        let response = await fetch(apiInsertAStaff,
            {
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params)
            });
            let responseJSON = await response.json();
            return responseJSON.stringify(params);
    }
    catch(error){
        console.log(error);
    }
}

export {insertAStaff};