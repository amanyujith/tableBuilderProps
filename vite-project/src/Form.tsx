import { Table } from "./Table"

export const Form = ()=>{
    const data = [
        {
            firstname:"Amanyujith",
            lastname:"jith",
            age:22
        },
        {
            firstname:"Amarjith",
            lastname:"Raj",
            age:31
        }
    ]
    const tableStruct = [
        {
            fieldname:'firstname'
        },
        {
            fieldname:'lastname'
        },
        {
            fieldname:'age'
        }
    ]
    const otherData = [
        {
            name:"Amanyujith Raj",
            physics:88,
            maths:90,
            science:99
        },
        {
            name:"Amarjith Raj",
            physics:88,
            maths:90,
            science:99
        },
    ]
   const  otherTableStruct =[
        {
            fieldname:'name'
        },
        {
            fieldname:'physics'
        },
        {
            fieldname:'maths'
        },
        {
            fieldname:'science'
        }
    ]
    return <div>
        <Table data={data} struct={tableStruct}/>
        <Table data={otherData} struct={otherTableStruct} />
    </div>
}