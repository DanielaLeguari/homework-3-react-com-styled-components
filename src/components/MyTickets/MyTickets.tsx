import { MyTicket } from "./MyTickets.styled";

const MyTickets = () => {
    return (
        <MyTicket>
            <h1>My Tickets</h1>
            <div className="adicionar-ticket">
                <img src="./assets/file.png" alt="Imagem de nenhum arquivo encontrado" />
                <h3>You do not have any tickets yet!</h3>
                <p>Send your first ticket from here.</p>
                <button type="button">ADD NEW TICKET</button>
            </div>
        </MyTicket>
    );
}


export default MyTickets;