import Link from "next/link";

const Clients = () => {
    const clients = [
        {id: 'manu', name: 'Manuel'},
        {id: 'max', name: 'Maximilian'},
    ]

    return (
        <div>
            <h1>The clients pages</h1>
            <ul>
                {clients.map(client => <li key={client.id}><Link href={{
                    pathname: '/clients/[id]',
                    query: {id: client.id},
                }}>{client.name}</Link></li>)}
            </ul>
        </div>
    );
};

export default Clients;
