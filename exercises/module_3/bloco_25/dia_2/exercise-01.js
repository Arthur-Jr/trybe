// 01-02:
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: [new Date(), "$dataNascimento"] },
            { $multiply: [86400000, 364] }
          ]
        }
      }
    }
  },
  {
    $match: { idade: { $lt: 25, $gt: 18 } }
  },
  {
    $count: "Total"
  }
]);

// 03-04:
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: [new Date(), "$dataNascimento"] },
            { $multiply: [86400000, 364] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras"
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate("2019-06-01"),
        $lte: ISODate("2020-03-31")
      }
    }
  }
]);

// 05:
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: [new Date(), "$dataNascimento"] },
            { $multiply: [86400000, 364] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras"
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate("2019-06-01"),
        $lte: ISODate("2020-03-31")
      }
    }
  }
]).itcount();

// 06:
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: [new Date(), "$dataNascimento"] },
            { $multiply: [86400000, 364] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras"
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate("2019-06-01"),
        $lte: ISODate("2020-03-31")
      }
    }
  },
  {
    $unwind: "$compras",
  },
  {
    $group: {
      _id: "$endereco.uf",
      total: { $sum: 1 }
    }
  },
  {
    $sort: { total: -1 }
  },
  {
    $limit: 5
  }
]);

// 07:
db.vendas.aggregate([
  { $unwind: "$itens" },
  {
    $match: { "itens.nome": "QUEIJO PRATO" }
  },
  {
    $group:{
      _id: "$clienteId",
      total: { $sum: 1 }
    }
  },
  {
    $sort: { total: -1 }
  },
  {
    $limit: 1
  },
]);

// 08:
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2020-03-01'),
        $lte: ISODate('2020-03-31')
      },
      status: "EM SEPARACAO"
    }
  },
  {
    $addFields: {
      dataEntregaPrevista: { $add: ["$dataVenda", 3 * 24 * 60 * 60000] }
    }
  },
  {
    $project: {
      _id: 0,
      clienteId: 1,
      dataVenda: 1,
      dataEntregaPrevista: 1
    }
  }
]);


db.vendas.find();