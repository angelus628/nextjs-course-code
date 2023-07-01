import { useRouter } from "next/router";

const SelectedClientProject = () => {
    const router = useRouter();
    
    console.log(router.query);

    return (
        <div>
            <h1>The project page for a specific project of a selected client</h1>
        </div>
    );
};

export default SelectedClientProject;
