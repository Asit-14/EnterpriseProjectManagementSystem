import User from "../model/user.model.js";

const create = async (req, res) => {
  try {
    const { name, age, email, userName } = req.body;

    const user = await User.create({
      name,
      age,
      email,
      userName
    });

    res.status(201).json({
      message: "User created successfully",
      user
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
}


  const  read = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users"
    });
  }
}

 const readsingleuser = async(req, res) => {
    try {
        const { userName } = req.query;

        const user = await User.findOne({ userName });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


 const filterthedata =  async (req, res) => {
  try {
    const users = await User.find({
      $and: [
        { age: { $gt: 18 } },
        { name: { $ne: "Asit Kumar" } }
      ]
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


const updateuserbyid = async (req, res) => {
  try {
    const { name, age, email } = req.body;

    const user = await User.findOneAndUpdate(
      { email },
      { name, age },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      user
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
    }
    
}


  const deleteuserbyid =   async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User deleted successfully",
      user
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export {
    create,
    read,
    readsingleuser,
    filterthedata,
    updateuserbyid,deleteuserbyid
}