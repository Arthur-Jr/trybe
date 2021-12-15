// 01:
db.clientes.aggregate([
  { $match: { sexo: "MASCULINO" } }
]);

// 02:
// Chequei o gabarito.
db.clientes.aggregate([
  { $match:
    {
      sexo: "FEMININO",
      dataNascimento: {
        $gte: ISODate("1995-01-01"),
        $lte: ISODate("2005-12-31")
      }
    } 
  }
]);

// 03:
db.clientes.aggregate([
  { $match:
    {
      sexo: "FEMININO",
      dataNascimento: {
        $gte: ISODate("1995-01-01"),
        $lte: ISODate("2005-12-31")
      }
    } 
  },
  { $limit: 5 }
]);

// 04:
db.clientes.aggregate([
  { $match: { "endereco.uf": "SC" } },
  { $group: { _id: "$endereco.uf", total: { $sum: 1 } } }
]);

// 05:
db.clientes.aggregate([
  { $group: { _id: "$sexo", total: { $sum: 1 } } }
]);

// 06:
db.clientes.aggregate([
  {
    $group: {
      _id: { sexo: "$sexo", UF: "$endereco.uf" },
      total: { $sum: 1 }
    }
  }
]);

// 07:
db.clientes.aggregate([
  {
    $group: {
      _id: { sexo: "$sexo", UF: "$endereco.uf" },
      total: { $sum: 1 }
    }
  },
  { 
    $project: {
      _id: 0,
      estado: "$_id.UF",
      sexo: "$_id.sexo",
      total: 1 
    } 
  }
]);

// 08:
db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      total: { $sum: "$valorTotal" }
    }
  },
  { $sort: { valorTotal: -1 } },
  { $limit: 5 }
]);

// 09:
db.vendas.aggregate([
  { 
    $match: {
      dataVenda: {
        $gte: ISODate("2019-01-01"),
        $lte: ISODate("2019-12-31")
      }
    } 
  },
  {
    $group: {
      _id: "$clienteId",
      total: { $sum: "$valorTotal" }
    }
  },
  { $sort: { valorTotal: -1 } },
  { $limit: 10 }
]);

// 10:
db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      count: { $sum: 1 }
    }
  },
  {
    $match: { count: { $gt: 5 } }
  },
  {
    $group: {
      _id: null,
      total: { $sum: 1 }
    }
  },
  { $project: { _id: 0 } }
]);

// 11:
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate("2020-01-01"),
        $lte: ISODate("2020-03-31")
      }
    }
  },
  {
    $group: {
      _id: "$clienteId",
      count: { $sum: 1 }
    }
  },
  {
    $match: { count: { $lt: 3 } }
  },
  {
    $group: {
      _id: null,
      total: { $sum: 1 }
    }
  },
  { $project: { _id: 0 } }
]);

// 12:
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate("2020-01-01"),
        $lte: ISODate("2020-12-31")   
      }
    }
  },
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "Cliente_info"
    }
  },
  {
    $group: {
      _id: "$Cliente_info.endereco.uf",
      totalVendas: { $sum: 1 }
    }
  },
  { $sort: { totalVendas: -1 } },
  { $limit: 3 },
  {
    $project: {
      _id: 0,
      uf: "$_id",
      totalVendas: 1,
    }
  }
]);

// 013:
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate("2019-01-01"),
        $lte: ISODate("2019-12-31")   
      }
    }
  },
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "Cliente_info"
    }
  },
  {
    $group: {
      _id: "$Cliente_info.endereco.uf",
      totalVendas: { $sum: 1 },
      mediaVendas: { $avg: "$valorTotal" }
    }
  },
  { $unwind: "$_id" },
  {
    $project: {
      uf: "$_id",
      totalVendas: 1,
      mediaVendas: 1,
      _id: 0
    }
  },
  { $sort: { uf: 1 } }
]);

db.clientes.find();
db.vendas.find();