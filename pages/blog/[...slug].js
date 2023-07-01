import { useRouter } from "next/router";

const Slug = () => {
    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            <h1>The blog post</h1>
        </div>
    );
};

export default Slug;
