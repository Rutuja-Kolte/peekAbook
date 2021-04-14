@echo %off

echo "Setting FLASK_APP to application.py ..."
SET FLASK_APP=application.py

echo "Setting FLASK_DEBUG to 1 ...
SET FLASK_DEBUG=1

echo "Setting DATABASE_URL ..."
SET DATABASE_URL=postgresql://postgres:elephant@localhost:5432/Book_list

echo "-----------------------------------------------------"
echo "Enviroment setup complete."
