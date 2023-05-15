import { useRouter } from "next/router";

const PortfolioId = () => {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query.PortfolioId);

    return (
        <div><h1>This is the portfolio id: {router.query.PortfolioId}</h1></div>
    );
};

export default PortfolioId;
