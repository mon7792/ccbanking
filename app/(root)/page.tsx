import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

export default function Home() {

  const loggedIn = { firstName: "Monish" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName || "guest"}
            subtext="Access and manage your account and transactions efficiently." />

            <TotalBalanceBox 
              accounts = {[]}
              totalBanks = {1}
              totalCurrentBalance = {1250}
              />
        </header>

      </div>

    </section>
  );
}
