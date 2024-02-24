const nameList: string[] = []

function AddNames(name: string){
    nameList.push(name)
}

function ReadNames(){
    nameList.forEach(name => {
        console.log(name)
    });
}

function RemoveNames(id: number){
    nameList.splice(id, 1)
}

function UpdateNames(id: number, name: string){
    nameList.splice(id, 1, name)
}
