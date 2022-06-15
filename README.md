# generic_integration

Quadfloor open integration tool do generic ERP using
the FROM -> TO strategy.


QUADFLOOR   <-> INTEMEDIATE DATABASE <-> ERP

Data does not go directly from or to ERP. It goes to an 
intermediate database.

Each system (Quadfloor and ERP) will connect to database, 
read data directed to himself and write data desired to the
other system.

All tables and data are configured according to the configuration
parameters.

Current support:
- Microsoft SQL Server



(c) Quadfloor Software
