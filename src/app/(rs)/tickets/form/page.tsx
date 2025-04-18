import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { BackButton } from "@/components/BackButton";

export default async function TicketFormPage({
    searchParams,
} : {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    try {

        const { customerId, ticketId } = await searchParams;

        if(!customerId && !ticketId) {
            return (
                <>
                    <h2 className="text-2xl mb-2 ">Customer ID or Tickets ID required to load the ticket form </h2>
                    <BackButton
                        title="Go Back"
                        variant="default"
                    />
                </>
            )
        }

        // New Ticket Form 
        if(customerId) {
            const customer = await getCustomer(parseInt(customerId));

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

            if( !customer.active ) {
                return (
                    <>
                        <h2 className="text-2xl mb-2 ">Customer ID #{customerId} is not active </h2>
                        <BackButton
                            title="Go Back"
                            variant="default"
                        />
                    </>
                )
            }
            console.log(customer);
        }

        if(ticketId) {
            const ticket = await getTicket(parseInt(ticketId)); 
            if(!ticket) {
                return (
                    <>
                        <h2 className="text-2xl mb-2 ">Ticket ID #{ticketId} not found </h2>
                        <BackButton
                            title="Go Back"
                            variant="default"
                        />
                    </>
                )
            }

            const customer = await getCustomer(ticket.customerId);

            //return ticket form
            console.log(ticket);

        }
        
    } catch (e) {
        if( e instanceof Error) {
            throw e;
        }
    }
}