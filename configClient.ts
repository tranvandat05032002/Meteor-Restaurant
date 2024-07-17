import { z } from 'zod'
const configClientSchema = z.object({
    NEXT_PUBLIC_API_ENDPOINT: z.string(),
    NEXT_PUBLIC_URL: z.string()
})
const configProject = configClientSchema.safeParse({
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL
})
if (!configProject.success) {
    const errorDetails = configProject.error.issues
    errorDetails.forEach((issue) => {
        console.log(`Key: ${issue.path[0]}, Error: ${issue.message}`)
        throw new Error(`Key: ${issue.path[0]}, Error: ${issue.message} ---> KEY không hợp lệ hoặc không tồn tại`)
    })
}
const envClientConfig = configProject.data

export default envClientConfig