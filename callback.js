console.log('before');
getUser(getUsers);

console.log('after');



function displayCommits(commits) {
    console.log(commits);
   
}

function gtBranches(branches) {
    console.log(branches);
    getCommits(branches, displayCommits)
}

function getUsers(users) {
    console.log(users);
    getBranches(users.name, gtBranches)
}



function getUser(callback) {
    setTimeout(() => {
        console.log('Timeout...');
        callback({name:"Gokul", githubId:"gokulakrishnan97"})
    }, 2000);
}

function getBranches(userName, callback) {
    setTimeout(() => {
        console.log('time.... ');
        callback({name: userName, branches:['asynchronous', 'crud', 'form']});
    }, 2000)
}

function getCommits(branches, callback) {
    setTimeout(() => {
         console.log('Timeout...');
        callback([1, 2, 3]);
    }, 2000)
}