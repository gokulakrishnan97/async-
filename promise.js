console.log('before');
getUser()
    .then(user => getBranches())
    .then(branches => getCommits())
    .then(commits => console.log("commits ", commits))
    .catch(err => console.log(err))
console.log('after');

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log('timeout.....');
            resolve({name:"Gokul", githubId:"gokulakrishnan97"})
        }, 2000)    
    })
    
}

function getBranches(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('time.... ');
            resolve({name: userName, branches:['asynchronous', 'crud', 'form']});
        }, 2000)
    })
}

function getCommits(branches) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Timeout...');
            resolve([1, 2, 3]);
    }, 2000)
    })
    
    
}