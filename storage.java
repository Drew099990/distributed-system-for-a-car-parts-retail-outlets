import static java.lang.System.*;
import java.sql.*;
public class storage{
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/javadb";
        try {
        Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(url,"root","");
       Statement statement = conn.createStatement();

       statement.executeUpdate("CREATE TABLE IF NOT EXISTS document(file VARCHAR(100))");
        
    out.println("done");}
        catch (Exception e){
        out.print(e);
        }
    }
}