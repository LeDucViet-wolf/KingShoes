const allBets = [
    {
      id: 1,
      betId: "#BET2540",
      bettorYesName: "Ron D.",
      amount: "$10.000,00",
      city: "Fort Worth",
      state: "Texas",
      country: "USA",
      odd: 120,
      counter: "challenged",
      bettorNoName: "Bluno Milo",
      amountNo: "$12.000,00",
      cityNo: "NYC",
      stateNo: "California",
      countryNo: "USA",
    },
    {
      id: 2,
      betId: "#BET2540",
      bettorYesName: "Elon M",
      amount: "$5.000,00",
      city: "Fort Worth",
      state: "Texas",
      country: "USA",
      odd: 120,
      counter: "challenged",
      bettorNoName: "Bluno Milo",
      amountNo: "$12.000,00",
      cityNo: "NYC",
      stateNo: "California",
      countryNo: "USA",
    }
    ,{
      id: 3,
      betId: "#BET2540",
      bettorYesName: "Bruno Omlin",
      amount: "$1.000",
      city: "Fort Worth",
      state: "Texas",
      country: "USA",
      odd: 120,
      counter: "close",
      bettorNoName: "Bluno Milo",
      amountNo: "$12.000,00",
      cityNo: "NYC",
      stateNo: "California",
      countryNo: "USA",
    }
    ,{
      id: 4,
      betId: "#BET2540",
      bettorYesName: "Ally",
      amount: "$20.000,00",
      city: "Fort Worth",
      state: "Texas",
      country: "USA",
      odd: 120,
      counter: "open",
      bettorNoName: "Bluno Milo",
      amountNo: "$12.000,00",
      cityNo: "NYC",
      stateNo: "California",
      countryNo: "USA",
    },
    {
      id: 5,
      betId: "#BET2540",
      bettorYesName: "Rand P",
      amount: "$100.000,00",
      city: "Fort Worth",
      state: "Texas",
      country: "USA",
      odd: 120,
      counter: "open",
      bettorNoName: "Bluno Milo",
      amountNo: "$12.000,00",
      cityNo: "NYC",
      stateNo: "California",
      countryNo: "USA",
    }
    ,{
      id: 6,
      betId: "#BET2540",
      bettorYesName: "Loretta L",
      amount: "$50.000,00",
      city: "Fort Worth",
      state: "Texas",
      country: "USA",
      odd: 120,
      counter: "close",
      bettorNoName: "Bluno Milo",
      amountNo: "$12.000,00",
      cityNo: "NYC",
      stateNo: "California",
      countryNo: "USA",
    }
    ,{
      id: 7,
      betId: "#BET2540",
      bettorYesName: "Jon",
      amount: "$11.000,00",
      city: "Fort Worth",
      state: "Texas",
      country: "USA",
      odd: 120,
      counter: "challenged",
      bettorNoName: "Bluno Milo",
      amountNo: "$12.000,00",
      cityNo: "NYC",
      stateNo: "California",
      countryNo: "USA",
    },
    {
      id: 8,
      betId: "#BET2540",
      bettorYesName: "Stacey X.",
      amount: "$120.000,00",
      city: "Fort Worth",
      state: "Texas",
      country: "USA",
      odd: 120,
      counter: "open",
      bettorNoName: "Bluno Milo",
      amountNo: "$12.000,00",
      cityNo: "NYC",
      stateNo: "California",
      countryNo: "USA",
    },
    {
      id: 9,
      betId: "#BET2540",
      bettorYesName: "Mike",
      amount: "$24.000,00",
      city: "Fort Worth",
      state: "Texas",
      country: "USA",
      odd: 120,
      counter: "close",
      bettorNoName: "Bluno Milo",
      amountNo: "$12.000,00",
      cityNo: "NYC",
      stateNo: "California",
      countryNo: "USA",
    },
    {
      id: 10,
      betId: "#BET2540",
      bettorYesName: "Mike",
      amount: "$150.000,00",
      city: "Fort Worth",
      state: "Texas",
      country: "USA",
      odd: 120,
      counter: "challenged",
      bettorNoName: "Bluno Milo",
      amountNo: "$12.000,00",
      cityNo: "NYC",
      stateNo: "California",
      countryNo: "USA",
    }
  ]

  const fakeBetId =[
    {
      "id": 9,
      "code": "OF1649079287",
      "created_at": "2022-07-07T03:35:07.000Z",
      "amount": "10000",
      "odds": "100",
      "counter": {
        "id": 3,
        "type": "CHALLENGE"
      },
      "currency": {
        "id": 1,
        "code": "USD",
        "symbol": "$"
      },
      "constracts": "dasdas",
      "status": 1,
      "created_user": {
        "id": 69,
        "username": "aliepenter2",
        "firstname": "Tuan2",
        "lastname": "Dat",
        "country": "Viet Nam",
        "state": "Nam Tu Liem",
        "city": "Ha Noi"
      },
      "accepted_user": {
        "id": 70,
        "username": "aliepenter22",
        "firstname": "Tuan22",
        "lastname": "Dat",
        "country": "Viet Nam",
        "state": "Nam Tu Liem",
        "city": "Ha Noi"
      },
      "bettor_yes_id": 70,
      "bettor_no_id": 69,
      "by_detail": [
        {
          "id": 5,
          "bet_id": 9,
          "upload_certificate_document": "xxx",
          "payment_method": "credit card",
          "message": "message4",
          "created_at": "2022-07-08T03:49:27.000Z",
          "updated_at": "2022-07-08T04:42:35.000Z",
          "accepted_at": "2022-07-08T04:08:43.000Z",
          "user_id": 70
        }
      ],
      "bn_detail": [
        {
          "id": 2,
          "bet_id": 9,
          "upload_certificate_document": "xxx",
          "payment_method": "paypal",
          "message": "message2",
          "created_at": "2022-07-08T03:49:27.000Z",
          "updated_at": "2022-07-08T09:31:26.000Z",
          "accepted_at": null,
          "user_id": 69
        }
      ],
      "bettor_yes": {
        "id": 70,
        "username": "aliepenter22",
        "firstname": "Tuan22",
        "lastname": "Dat",
        "country": "Viet Nam",
        "state": "Nam Tu Liem",
        "city": "Ha Noi"
      },
      "bettor_no": {
        "id": 69,
        "username": "aliepenter2",
        "firstname": "Tuan2",
        "lastname": "Dat",
        "country": "Viet Nam",
        "state": "Nam Tu Liem",
        "city": "Ha Noi"
      }
    }
  ]

  export {
    allBets,fakeBetId
  }