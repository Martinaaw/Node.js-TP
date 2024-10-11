import { connect } from "mongoose";
async function main () {
    await connect(process.env.MONGO_URI)
    
}
main().then(()=> console.log("MongoDB Connected"))
.catch(errr => console.log (`Connection failed: ${errr.message}`))