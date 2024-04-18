const { throwError } = require("../utils/error.utils");
const { success, error } = require("../utils/response.utils");
const positionRepo = require("./positionRepo");
const Branch = require("../Branch/branchRepo");

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const position = await positionRepo.getById(id);
    return success(res, "Success", position);
  } catch (err) {
    return error(res, err.message);
  }
};

const getAll = async (req, res) => {
  try {
    const branch_id = req.query.branch_id;
    console.log("🚀 ~ getAll ~ branch_id:", branch_id);

    // Menggunakan destructuring untuk mengambil nilai header
    const { division, branch, title } = req.headers;
    let data = { division, branch, title };

    const lowerTitle = data.title.toLowerCase();

    // Memeriksa kondisi untuk pengaturan data berdasarkan peran dan cabang
    if (lowerTitle === "director" || lowerTitle === "direktur") {
      // Jika title adalah "director" atau "direktur"
      if (branch === "PT. RES") {
        // Jika cabang adalah "PT. RES", hapus branch dan division dari data
        data.branch = undefined;
        data.division = undefined;
      } else {
        // Jika bukan cabang "PT. RES", hapus division saja dari data
        data.division = undefined;
      }
    } else if (lowerTitle === "admin") {
      // Jika title adalah "admin", tetapkan branch ke branch_id dari query
      data.branch = branch_id;
    }

    console.log("🚀 ~ getAll ~ data:", data);

    // Panggil fungsi positionRepo.getAll dengan data yang sudah dimodifikasi
    const response = await positionRepo.getAll(data);

    // Memanggil fungsi success untuk memberi respons dengan data yang berhasil diambil
    return success(res, "Success", response);
  } catch (err) {
    // Jika terjadi kesalahan, tangani dengan mengirim pesan kesalahan
    return error(res, err.message);
  }
};

const deleteData = async (req, res) => {
  try {
    const position = await positionRepo.isExist(req.params.p_name);
    if (!position) throw Error("Position didnt exist");
    const deletedPosition = await positionRepo.del(position.id);
    return success(
      res,
      `Position ${deletedPosition.p_name} Deleted Successfully`,
      deletedPosition
    );
  } catch (err) {
    return error(res, err.message);
  }
};

const createNew = async (req, res) => {
  try {
    const exist = await positionRepo.isExist(req.body.p_name);
    if (exist) throw Error("Position already exist");
    const createdPosition = await positionRepo.create(req.body);
    return success(
      res,
      `Position ${createdPosition.p_name} Created`,
      createdPosition
    );
  } catch (err) {
    return error(res, err.message);
  }
};

module.exports = { createNew, getAll, deleteData, getById };
