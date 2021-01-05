export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsImlhdCI6MTYwOTgyODAxOSwiZXhwIjoxNjEwNDMyODE5fQ.q_n0yqbGg7wJhcT6Jmds4C48lJxe6L4aR_OGakMBSzs' };
    } else {
        return {};
    }
}