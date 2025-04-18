import { getCustomer } from "@/lib/queries/getCustomer";
import { BackButton } from "@/components/BackButton";
import * as sentry from "@sentry/nextjs";


export default async function CustomerFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    try {
        const { customerId } = await searchParams;

        // Edit customer form
        if(customerId){
            const customer = await getCustomer(Number(customerId));
            if(!customer) {
                return (
                    <>
                        <h2 className="text-2xl mb-2 ">Customer ID #{customerId} not found </h2>
                        <BackButton
                            title="Go Back"
                            variant="default"
                        />
                    </>
                )
            }
            console.log(customer);
            // Put customer form component here
        }else{
            // New customer form
            // Put customer form component here
        }
    } catch (e) {
        if(e instanceof Error) {
            sentry.captureException(e);
            throw e;
        }
    }
}