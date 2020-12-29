const ipToDatabase = 'http://192.168.0.100:3000'
const apiInsertAStaff = ipToDatabase + '/api/staffs/createStaff'
const apiGetAllStaff = ipToDatabase + '/api/staffs/getAllStaff';
const apiDeleteAStaff = ipToDatabase + '/api/staffs/deleteStaff/'
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
            console.log(params);
            return responseJSON.result;
    }
    catch(error){
        console.log(error);
    }
}
// get data from server 
async function getStaffFromServer(){
    try{
        let response = await fetch(apiGetAllStaff);
        let responseJSON = await response.json();
        return responseJSON;
    }
    catch(error){
        console.log(error);
    }
}
async function deleteAStaff(id){
    try{
         fetch(apiDeleteAStaff + id,
            {
                method: 'DELETE',
                body: JSON.stringify(id)
            });
    }
    catch(error){
        console.log(error);
    }
}
export {insertAStaff};
export {getStaffFromServer};
export {deleteAStaff};