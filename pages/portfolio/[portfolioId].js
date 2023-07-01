import { useRouter } from "next/router";

const PortfolioId = () => {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query.portfolioId);

    return (
        <div><h1>This is the portfolio id: {router.query.portfolioId}</h1></div>
    );
};

export default PortfolioId;
