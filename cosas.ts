// const getAll = function(a:number, b:number){
//     return a + b;

// };


// export{getAll};



let supermarketList = [
    {
        producto: "carne",
        precio: 700,
        id: 1,
    },
    {
        producto: "cebolla",
        precio: 100,
        id: 2,
    },
    {
        producto: "morron",
        precio: 250,
        id: 3,
    },
    {
        producto: "puré",
        precio: 70,
        id: 4,
    },
    {
        producto: "papa",
        precio: 100,
        id: 5,
    },
    {
        producto: "zanahoria",
        precio: 100,
        id: 6,
    },
    {
        producto: "pepsi",
        precio: 150,
        id: 7,
    },
    {
        producto: "monster",
        precio: 200,
        id: 8,
    },
    {
        producto: "te",
        precio: 130,
        id: 9,
    },
    {
        producto: "pan",
        precio: 130,
        id: 10,
    },
        
    ]


    function getAll(){
        return supermarketList;

    };

    function getById(id:number){
        
        for (let index = 0; index < supermarketList.length; index++) {
            const element = supermarketList[index];
            if(element.id == id){  
                        // console.log(element)
                        return element; 
            }
        };
    }
export {getAll, getById};