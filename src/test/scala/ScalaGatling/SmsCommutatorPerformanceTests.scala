package ScalaGatling

import java.util.concurrent.TimeUnit

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.jms.Predef._
import io.gatling.jms.protocol.JmsProtocolBuilder
import javax.jms._
import org.apache.activemq._

import scala.concurrent.duration._

class SmsCommutatorPerformanceTests extends Simulation {
  val arg = System.getProperty("arg", "test")
  var url = ""
  arg match {
    case "stage" =>
      url = "tcp://192.168.66.196:61616"
    case "test" =>
      url = "tcp://192.168.66.194:61616"
  }

  val connectionFactory = new ActiveMQConnectionFactory("karaf", "karaf", url)

  val jmsConfig: JmsProtocolBuilder = jms.connectionFactory(connectionFactory)
    .usePersistentDeliveryMode
    .matchByCorrelationId

  val scn: ScenarioBuilder = scenario("scn")
    .repeat(1) {
      exec(jms("req reply testing").requestReply
        .queue("sms.commutator.in.queue")
        .replyQueue("sms.commutator.out.queue")
        .textMessage("<sch:SimpleSendSMSRequest xmlns:sch=\"http://unitarius.ru/mgw/ws/schema\"><sch:To>+79521806945</sch:To><sch:Text>Тестовое СМС</sch:Text></sch:SimpleSendSMSRequest>")
        .check(simpleCheck(checkBodyTextCorrect))
      )
    }

  setUp(scn.inject(constantUsersPerSec(1) during(10 second)))
    .maxDuration(FiniteDuration.apply(2, TimeUnit.MINUTES))
    .protocols(jmsConfig)

  def checkBodyTextCorrect(m: javax.jms.Message): Boolean = {
    m match {
      case tm: TextMessage => tm.getText.contains("ACCEPTED")
      case _               => false
    }
  }
}
