import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

export default async function Home() {

  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type="greeting" title="Welcome" user={loggedIn?.name || "guest"}
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
