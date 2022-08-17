module.exports = (sequelize, DataTypes) => {

    const Adherent = sequelize.define("adherent", {
        entreprise: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nom: {
            type: DataTypes.STRING
        },
        prenom: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        identifiant: {
            type: DataTypes.STRING
        }
    })

    return Adherent

}