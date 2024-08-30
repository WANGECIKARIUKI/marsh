from app import db


# create models
class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    date_created = db.Column(db.DateTime, nullable=False, default=dateTime.utcnow)

##create a string

    def __repr__(self):
        return '<Name %r>' % self.name    