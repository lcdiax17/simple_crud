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
    const removeName = nameList.splice(id, 1)
    return removeName
}

function UpdateNames(id: number, name: string){
    nameList.splice(id, 1, name)
}

// AddNames("Alex")
// AddNames("Otavio")
// AddNames("Roberto")

// ReadNames()

// RemoveNames(1)

// ReadNames()

// UpdateNames(1, "Osvaldo")

// ReadNames()

/* As chamadas de função acima são referentes aos testes propostos do exercício */