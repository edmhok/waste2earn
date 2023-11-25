import Principal "mo:base/Principal";
// import Cycle "mo:base/ExperimentalCycles";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";

actor Token {

    let owner : Principal = Principal.fromText("lt5vc-xirau-qp5xz-mtfoz-ecb47-lzwq4-6hpwl-r4o3m-4bcej-54z7m-4ae");
    let controllerId = Principal.fromText("jsfb6-dqklx-fie2s-avyor-pxs3v-64a6c-wpowo-5mwbb-veuoy-qceqi-3qe");
    let totalSupply : Nat = 1000000000;
    let symbol : Text = "W2E";

    // Create the cycles faucet
    // let faucet = Cycles.Counter({
    //     controller = controllerId;
    //     limit = 1_000_000_000_000; // set the cycle limit to 1 trillion cycles
    //     accept = variant { callback = object {} }; //accept cycles sent to the canister
    // });

    // public func addCycles() : async () {
    //     let available = Cycles.available();
    //     let accepted = Cycles.accept(Cycles.available);
    //     faucet.add(accepted)
    // };

    // public func withdrawCycles(amount : Nat) : async () {
    //     let result = faucet.sub(amount);
    //     switch (result) {
    //         case (#ok(balance)) {
    //             // transfer succeeded
    //             let transferred = Cycles.add(balance); // add cycles back
    //             ignore Cycles.accept(transferred)
    //         };
    //         case (#err(e)) {
    //             // transfer failed
    //             // handle error
    //         }
    //     }
    // };

    private stable var balanceEntries : [(Principal, Nat)] = [];
    private var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
    if (balances.size() < 1) {
        balances.put(owner, totalSupply)
    };

    public query func balanceOf(who : Principal) : async Nat {

        let balance : Nat = switch (balances.get(who)) {
            case null 0;
            case (?result) result
        };

        return balance
    };

    public query func getSymbol() : async Text {
        return symbol
    };

    public shared (msg) func payOut() : async Text {
        Debug.print(debug_show (msg.caller));
        if (balances.get(msg.caller) == null) {
            let amount = 100;
            let result = await transfer(msg.caller, amount);
            return result
        } else {
            return "Already Claimed"
        }
    };

    public shared (msg) func transfer(to : Principal, amount : Nat) : async Text {
        let fromBalance = await balanceOf(msg.caller);
        if (fromBalance > amount) {
            let newFromBalance : Nat = fromBalance - amount;
            balances.put(msg.caller, newFromBalance);

            let toBalance = await balanceOf(to);
            let newToBalance = toBalance + amount;
            balances.put(to, newToBalance);

            return "Success"
        } else {
            return "Insufficient Funds"
        }

    };

    system func preupgrade() {
        balanceEntries := Iter.toArray(balances.entries())
    };

    system func postupgrade() {
        balances := HashMap.fromIter<Principal, Nat>(balanceEntries.vals(), 1, Principal.equal, Principal.hash);
        if (balances.size() < 1) {
            balances.put(owner, totalSupply)
        }
    };

}
