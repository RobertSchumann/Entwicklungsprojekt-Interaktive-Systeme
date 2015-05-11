

import java.io.IOException;

import org.jivesoftware.smack.AbstractXMPPConnection;
import org.jivesoftware.smack.SmackConfiguration;
import org.jivesoftware.smack.SmackException;
import org.jivesoftware.smack.XMPPException;
import org.jivesoftware.smack.XMPPConnection.*;
import org.jivesoftware.smack.tcp.XMPPTCPConnection;
import org.jivesoftware.smack.tcp.XMPPTCPConnectionConfiguration;
import org.jivesoftware.smack.tcp.XMPPTCPConnectionConfiguration.Builder;


public class ConHandler {

//Create a connection to the server.
//XMPPTCPConnection conn1 = new XMPPTCPConnection("clienta", "ClientA", "doro-Ubuntu");
//conn1.connect();

public static Builder config = XMPPTCPConnectionConfiguration.builder()
.setUsernameAndPassword("clienta", "ClientA")
.setServiceName("doro-ubuntu")
.setHost("doro-Ubuntu")
.setPort(5222)
.setDebuggerEnabled(true)
.setCompressionEnabled(false);




public static void openconn(){

	
	AbstractXMPPConnection conn2 = new XMPPTCPConnection(config.build());
		
	try {
			conn2.connect();
		} catch (SmackException e) {
			System.out.println("Smack Err");
			e.printStackTrace();
		} catch (IOException e) {
			System.out.println("IO Err");
			e.printStackTrace();
		} catch (XMPPException e) {
			System.out.println("XMPP Err");
			e.printStackTrace();
		}
		try {
			conn2.login();
		} catch (XMPPException e) {
			System.out.println("XMPP Err");
			e.printStackTrace();
		} catch (SmackException e) {
			System.out.println("Smack Err");
			e.printStackTrace();
		} catch (IOException e) {
			System.out.println("IO Err");
			e.printStackTrace();
		}
	}
}




//public final class ConHandler extends XMPPTCPConnection {
//
//	public ConHandler(CharSequence username, String password, String serviceName) {
//		super(username, password, serviceName);
//		// TODO Auto-generated constructor stub
//	}
//
//
//
//	XMPPTCPConnectionConfiguration conf = XMPPConnectionConfiguration
//		    .builder()
//		    .setHost("doro-Ubuntu")
//		    .setPort(5222)
//		    .setUsernameAndPassword("clienta", "ClientA")
//		    .setCompressionEnabled(false)
//		    .build();
//
//		XMPPTCPConnection connection = new XMPPTCPConnection(conf);
//
//		
//		
//	public void connectInternal() {
//		try {
//			connection.connect();
//		} catch (SmackException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (XMPPException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		
//	}
//		
//}
