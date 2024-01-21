"use client"
import React, { SetStateAction, useEffect, useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { getBucketList } from '@/services/s3Clinet'
import { Button } from '@/components/ui/button'
import Spinner from '@/components/ui/spinner'
import { useTheme } from '@/contexts/themeContext'
const Page = () => {
    const [isBucketSelected, setIsBucketSelected] = useState(false)
    const [buckets, setBuckets] = useState<any[]>([]);
    const {theme} = useTheme()
    useEffect(() => {
        if (buckets.length === 0) {
            setIsBucketSelected(false)
            const getBucketListFunc = async () => {
                const bucketList = await getBucketList()
                console.log(bucketList)
                // Extract the bucket names or relevant data from the command output
                const bucketNames = bucketList.Buckets?.map(bucket => bucket.Name) || [];

                // Update the state with the data
                setBuckets(bucketNames);
            }
            getBucketListFunc()
        }
    }, [buckets.length])


    return (
        buckets.length > 0 ? (
            <div >
                <AlertDialog open={!isBucketSelected}>
                    <AlertDialogContent className={theme } >
                        <AlertDialogHeader className={theme}>
                            <AlertDialogTitle className={theme}>Please select a bucket</AlertDialogTitle>
                            {
                                buckets.map(bucket => <Button className={theme} variant={"default"} key={bucket} onClick={() => { }}>{bucket}</Button>)
                            }
                        </AlertDialogHeader>
                    </AlertDialogContent>
                </AlertDialog>
            </div>): <Spinner size={12}/>

    ) 
}

export default Page