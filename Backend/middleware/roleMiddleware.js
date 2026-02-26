export const coordinatorOnly = (req, res, next) => {
  if (req.user && req.user.role === "coordinator") {
    next();
  } else {
    res.status(403).json({ message: "Coordinator access only" });
  }
};