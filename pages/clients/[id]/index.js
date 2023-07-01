import { useRouter } from "next/router";

const ClientProjects = () => {
    const router = useRouter();
    console.log(router.query);

    const loadProjectHandler = () => {
        //load data
        router.push('/clients/max/projectA')
    };

    return (
        <div>
            <h1>The projects of a given client</h1>
            <button onClick={loadProjectHandler}>Load project A</button>
        </div>
    );
};

export default ClientProjects;
