## ENDPOINT API BRAPPI
1. ## Busca de dados básicos de ações, fiis, indíces específicos ou em listas, podendo filtrar por atributos:
    - DOC => https://brapi.dev/docs/acoes/list
    - URL:
    - https://brapi.dev/api/quote/list?search=PETR4&sortBy=name&sortOrder=asc&limit=10&page=1&token=SEU-TOKEN

    RETORNO:
    {
      "stock": "PETR4",
      "name": "PETROBRAS PN",
      "close": 32.64,
      "change": -0.3967043027159065,
      "volume": 23544900,
      "market_cap": 439717334719,
      "logo": "https://icons.brapi.dev/icons/PETR4.svg",
      "sector": "Energy Minerals",
      "type": "stock"
    },

2. ## Busca de dados de cotações de ações, fiis e indíces específicos, podendo determinar alcance e intervalo de tempo:
    - DOC: https://brapi.dev/docs/acoes
    - URL:
    - https://brapi.dev/api/quote/EGIE3?token=SEU-TOKEN&range=1d&interval=1d&fundamental=true&modules=summaryProfile

    RETORNO:
    {
        "results": [
            {
            "currency": "BRL",
            "marketCap": 34113939695,
            "shortName": "ENGIE BRASILON      NM",
            "longName": "Engie Brasil Energia S.A.",
            "regularMarketChange": -0.88,
            "regularMarketChangePercent": -2.156,
            "regularMarketTime": "2025-07-31T20:07:35.000Z",
            "regularMarketPrice": 39.93,
            "regularMarketDayHigh": 0,
            "regularMarketDayRange": "0 - 0",
            "regularMarketDayLow": 0,
            "regularMarketVolume": 0,
            "regularMarketPreviousClose": 40.81,
            "regularMarketOpen": 42.59,
            "fiftyTwoWeekRange": "0 - 49.19",
            "fiftyTwoWeekLow": 0,
            "fiftyTwoWeekHigh": 49.19,
            "symbol": "EGIE3",
            "logourl": "https://icons.brapi.dev/icons/EGIE3.svg",
            "usedInterval": "1d",
            "usedRange": "1d",
            "historicalDataPrice": [
                {
                "date": 1753880400,
                "open": 41.85,
                "high": 42.15,
                "low": 40.54,
                "close": 40.81,
                "volume": 1738100,
                "adjustedClose": 40.81
                },
                {
                "date": 1753992455,
                "open": 40.7,
                "high": 40.7,
                "low": 39.49,
                "close": 39.93,
                "volume": 1128200,
                "adjustedClose": 39.93
                }
            
            ],
            }
        ],
        "requestedAt": "2025-08-01T10:49:34.526Z",
        "took": "0ms"
    }
