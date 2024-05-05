import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

export default function Home() {

  const loggedIn = { firstName: "Monish", lastName: "K", email: "contact@mk.com"};
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

        Recent Transactions !
      </div>
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{
        currentBalance: 1250,
      },{
        currentBalance: 500,
      }]}
      />
    </section>
  );
}
