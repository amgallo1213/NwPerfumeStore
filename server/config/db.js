import mongoose from 'mongoose';

export const perfumeDB = async () => {
    try {
        // const conn = await mongoose.connect(process.env.MONGO_URI)

        const conn = await mongoose.connect('mongodb+srv://agallo1213:6iafUeJXJzJrZJTY@cluster0.gsvws.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0')


        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch (error) {
        console.log(`Error ${error.message}`)
        process.exit(1)
    }
}