"use server"
import { S3Client, ListBucketsCommand, S3ClientConfig, CreateBucketCommand } from "@aws-sdk/client-s3"

const config: S3ClientConfig = {
    region: process.env.S3_BUCKET_REGION,
    credentials: {
        accessKeyId: String(process.env.S3_ACCESS_KEY),
        secretAccessKey: String(process.env.S3_SECRET_ACCESS_KEY)
    }
}


const getBucketList = async () => {
    try{
    const client = new S3Client(config)
    const command = new ListBucketsCommand({});
    return await client.send(command);
    } catch(err){
        console.log(err)
        throw err
    }
}

const createBucket = async ({name}:{name: string}) => {
    try{
        const client = new S3Client(config)
        const command = new CreateBucketCommand({Bucket: name})
        return await client.send(command)
    } catch(err){
        throw err
    }
}

export {
    getBucketList,
    createBucket
}

