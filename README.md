![Frontend Preview](https://github.com/edmhok/w2etoken/blob/main/waste2earn/frontend/assets/waste2earn-preview.png?raw=true)

# Waste2Earn (W2E) Token

Waste Management - ICP Thinkhackathon Entry

Live ICP  - https://zmqec-lyaaa-aaaag-acfuq-cai.icp0.io/

# Pitchdeck Presentation 


# Video Presentation 
https://www.youtube.com/watch?v=Vb8tsWetoGU

# Metadata 🎯

W2E, Waste2Earn, Waste Management, Web3, ICP, Blockchain, dApp

📐 Tech stack : ViteJS, React, Motoko

# Milestone 🚧

1. Concept Development: The initial idea for the project is developed and refined. This includes defining the problem the project aims to solve, identifying the target users, and outlining the project's goals and objectives.
2. Smart Contract Development: The smart contracts that will govern the Waste2Earn platform are developed. These smart contracts will handle the logic for collecting waste, recycling, and earning tokens.
3. Frontend Development: The user interface for the Waste2Earn platform is developed. This includes designing and implementing the user interface for the platform, which users will interact with to collect waste, recycle, and earn tokens.
4. Testing: The Waste2Earn platform is tested to ensure it works as expected. This includes testing the smart contracts, the user interface, and the overall functionality of the platform.
5. Deployment: The Waste2Earn platform is deployed to the mainnet. This includes deploying the smart contracts to the mainnet and launching the platform for users to start using.
6. Maintenance and Updates: The Waste2Earn platform is maintained and updated as necessary. This includes fixing any bugs or issues that arise, and updating the platform to add new features or improvements.

💡 As of the moment, we are still under construction and improvement

# How to Run to your localhost:

//Make sure you have installed Node and dfx

```
git clone git@github.com:edmhok/w2etoken.git
cd w2etoken/waste2earn
npm install
dfx start --background
dfx deploy
npm run dev
```

# Check your Balance

1. Find out your principal id:

```
dfx identity get-principal
```

2. Save it somewhere.
   e.g. My principal id is: blah-blah-blah

3. Format and store it in a command line variable:

```
OWNER_PUBLIC_KEY="principal \"$( \dfx identity get-principal )\""
```

4. Check that step 3 worked by printing it out:

```
echo $OWNER_PUBLIC_KEY
```

5. Check the owner's balance:

```
dfx canister call token balanceOf "( $OWNER_PUBLIC_KEY )"
```

# Charge the Canister

1. Check canister ID:

```
dfx canister id token
```

2. Save canister ID into a command line variable:

```
CANISTER_PUBLIC_KEY="principal \"$( \dfx canister id token )\""
```

3. Check canister ID has been successfully saved:

```
echo $CANISTER_PUBLIC_KEY
```

4. Transfer half a billion tokens to the canister Principal ID:

```
dfx canister call token transfer "($CANISTER_PUBLIC_KEY, 500_000_000)"
```

# Deploy the Project to the Live IC Network

1. Create and deploy canisters:

```
dfx deploy --network ic
```

2. Check the live canister ID:

```
dfx canister --network ic id token
```

3. Save the live canister ID to a command line variable:

```
LIVE_CANISTER_KEY="principal \"$( \dfx canister --network ic id token )\""
```

4. Check that it worked:

```
echo $LIVE_CANISTER_KEY
```

5. Transfer some tokens to the live canister:

```
dfx canister --network ic call token transfer "($LIVE_CANISTER_KEY, 50_000_000)"
```

6. Get live canister front-end id:

```
dfx canister --network ic id token_assets
```

7. Copy the id from step 6 and add .raw.ic0.app to the end to form a URL.
   e.g. blah-blah-blah.raw.ic0.app

📃 MIT License

Copyright (c) 2023 Waste2Earn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Additional resources
IC-Eth Waste2Earn [git@github.com/edmhok/waste2earn.git]

# Team Waste2Earn
Edmund Albores,
Chriswalter Bautista,
Charmagne Jane Duyag,
Sanyiah Piang,

