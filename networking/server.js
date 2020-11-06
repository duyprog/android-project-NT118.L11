const apiInsertAStaff = 'http://192.168.1.11:3000/insert_new_staff'
const apiGetAllStaff = 'http://192.168.1.11:3000/get_all_staff';
const apiDeleteAStaff = 'http://192.168.1.11:3000/delete_a_staff/'
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
         fetch(`http://192.168.1.11:3000/delete_a_staff/` + id,
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